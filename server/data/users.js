const { checkStr, checkNum, checkFrogId } = require("../misc/validate");
const { users } = require("../config/mongoCollections");
const frogs = require("./frogs");
const { ObjectId } = require("mongodb");
const bcrypt = require("bcryptjs");

const hashPassword = async (plaintext, SALT_ROUNDS = 10) => {
	try {
		const hash = bcrypt.hash(plaintext, SALT_ROUNDS);
		return hash;
	} catch (error) {
		throw ("Error hashing password...", error);
	}
};

module.exports = {
	async getUser(_email) {
		const email = checkStr(_email);
		const collection = await users();
		const user = await collection.findOne({ email: email });
		if (user === null) return [];
		// make sure we always remove the password using removeKey when we send it back to the client
		return [user];
	},
	async getUsers() {
		const collection = await users();
		const userList = await collection.find({}).toArray();
		if (!userList) throw "could not get all users";
		return userList;
	},
	async deleteUser(_email) {
		const email = checkStr(_email);
		const collection = await users();
		const deletionInfo = await collection.deleteOne({ email: email });
		if (deletionInfo.deleteCount === 0) throw `Could not delete account for ${email}`;
		return true;
	},
	async createUser(_firstName, _lastName, _email, _password, _company, adminMoney = 0) {
		const email = checkStr(_email);
		const userExists = await this.getUser(email);
		if (userExists.length > 0) throw "Account with that email exists";
		const firstName = checkStr(_firstName);
		const lastName = checkStr(_lastName);
		const password = checkStr(_password);
		const company = checkStr(_company);
		const collection = await users();
		const newUser = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
			company: company,
			// ownedFrogs is an array of int ids
			// these int ids correlate with the id of a frog
			// if an id is in this array, this user owns that frog
			// all users start with frog 0
			ownedFrogs: [0],
			// friends is an array of emails of this user's friends
			friends: [],
			money: adminMoney,
			prestige: 0,
			level: 1,
			experience: 0,
			requiredExp: 100,
			// waterHistory is an array of water objects that contain a timestamp and amount of water drank
			waterHistory: [],
			// challenges is an array of challenge objects this user has accepted
			challenges: [],
			// completedChallenges is an array of challenge objects this user has completed
			completedChallenges: [],
			// preferred system: metric vs imperial
			measurement: "imperial", // we are flawed Americans
			// titles is an array of titles that this user has obtained
			// 'Tadpole'
			titles: ["Tadpole"],
			// title is the currently selected title
			title: 0,
			//frog is the currently selected frog
			frog: 0,
			// frogNames is an array of objects, with frogId and frogName. defaulted with 0
			// used to keep track of the user's current names of the frogs
			frogNames: [
				{
					id: 0,
					name: "Green Frog",
				},
			],
		};
		const insertInfo = await collection.insertOne(newUser);
		if (!insertInfo.acknowledged || !insertInfo.insertedId) throw "Could not register user";
		const user = await this.getUser(email);
		if (user.length < 1) throw "Could not get user";
		const ret = {
			...user[0],
			password: "thats not very froggers of you",
			successMsg: `Successfully registered account for ${email}!`,
		};
		return ret;
	},

	async createTestUser(_firstName, _lastName, _email, _company, adminMoney) {
		const plaintextPassword = "test";
		const password = await hashPassword(plaintextPassword);
		return await this.createUser(_firstName, _lastName, _email, password, _company, adminMoney);
	},

	async updateMoney(_email, _money) {
		const email = checkStr(_email);
		const money = checkNum(_money);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		if (user.money === money) throw "New money cannot be the same as the original";
		const collection = await users();
		const updatedUser = {
			...user,
			money: money,
		};
		const updateInfo = await collection.updateOne({ email: email }, { $set: updatedUser });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully updated money",
		};
	},

	async validateUser(_email, _password) {
		const email = checkStr(_email);
		const inputPassword = checkStr(_password);
		const userExists = await this.getUser(email);
		const errorMsg = "Invalid email or password";
		if (userExists.length < 1) throw errorMsg;
		const user = userExists[0];
		const { password } = user;
		const match = await bcrypt.compare(inputPassword, password);
		if (match) {
			return {
				...user,
				password: "thats not very froggers of you",
			};
		} else {
			throw errorMsg;
		}
	},

	async updateFirstName(_email, _firstName) {
		const email = checkStr(_email);
		const firstName = checkStr(_firstName);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		if (user.firstName === firstName) throw "New first name cannot be the same as the original";
		const collection = await users();
		const updatedUser = {
			...user,
			firstName: firstName,
		};
		const updateInfo = await collection.updateOne({ email: email }, { $set: updatedUser });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully updated First Name",
		};
	},
	async updateLastName(_email, _lastName) {
		const email = checkStr(_email);
		const lastName = checkStr(_lastName);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		if (user.lastName === lastName) throw "New last name cannot be the same as the original";
		const collection = await users();
		const updatedUser = {
			...user,
			lastName: lastName,
		};
		const updateInfo = await collection.updateOne({ email: email }, { $set: updatedUser });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully updated Last Name",
		};
	},
	async updateCompany(_email, _company) {
		const email = checkStr(_email);
		const company = checkStr(_company);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		if (user.company === company) throw "New company cannot be the same as the original";
		const collection = await users();
		const updatedUser = {
			...user,
			company: company,
		};
		const updateInfo = await collection.updateOne({ email: email }, { $set: updatedUser });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully updated Company",
		};
	},
	async updateChallenges(_email, _challenge) {
		const email = checkStr(_email);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const collection = await users();
		const updateInfo = await collection.updateOne({ email: email }, { $push: { challenges: _challenge } });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully updated Challenge",
		};
	},
	async updateCompletedChallenges(_email, _completedChallenge) {
		const email = checkStr(_email);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const collection = await users();
		const updateInfo = await collection.updateOne({ email: email }, { $push: { completedChallenges: _completedChallenge } });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully updated Completed Challenge",
		};
	},
	async updateFriendsList(_email, _friendEmail) {
		const email = checkStr(_email);
		const friendEmail = checkStr(_friendEmail);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		const friendExists = await this.getUser(friendEmail);
		if (friendExists.length < 1) throw "This person does not exist";
		const friend = friendExists[0];
		if (user.email === friend.email) throw "Cannot add yourself";
		const inList = user.friends.filter(x => x === friendEmail);
		if (inList.length !== 0) {
			throw "This user is already your friend";
		}
		const collection = await users();
		const updatedUser = {
			...user,
			friends: [...user.friends, friendEmail],
		};
		const updateInfo = await collection.updateOne({ email: email }, { $set: updatedUser });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully updated friends list",
		};
	},
	async updateMeasurement(_email, _measurement) {
		const email = checkStr(_email);
		const measurement = checkStr(_measurement);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		if (user.measurement === measurement) throw "New measurement cannot be the same as the original";
		const collection = await users();
		const updateInfo = await collection.updateOne({ email: email }, { $set: { measurement: measurement } });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully updated Measurement",
		};
	},
	async removeFriend(_email, _friendEmail) {
		const email = checkStr(_email);
		const friendEmail = checkStr(_friendEmail);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		const friendExists = user.friends.filter(friend => friend === friendEmail);
		if (friendExists.length < 1) throw "This user is not your friend";
		const friend = friendExists[0];
		const collection = await users();
		const updatedFriends = user.friends.filter(friend => friend !== friendEmail);
		const updatedUser = {
			...user,
			friends: updatedFriends,
		};
		const updateInfo = await collection.updateOne({ email: email }, { $set: updatedUser });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully updated friends list",
		};
	},
	async purchaseFrog(_email, _frogName) {
		const email = checkStr(_email);
		const frogName = checkStr(_frogName);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		const frogExists = await frogs.getFrog(frogName);
		if (frogExists.length < 1) throw "This frog does not exist";
		const frog = frogExists[0];
		const { frogId, name, price } = frog;
		if (user.ownedFrogs.includes(frogId)) throw "This user owns this frog already";
		if (price > user.money) throw "User cannot afford this frog";
		const updatedFrogName = { id: frogId, name: name }; //for the frogNames array
		const updatedMoney = user.money - price;
		const collection = await users();
		const updateInfo = await collection.updateOne({ email: email }, { $push: { ownedFrogs: frogId, frogNames: updatedFrogName }, $set: { money: updatedMoney } });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully purchased frog",
		};
	},
	async addTitle(_email, _title) {
		const email = checkStr(_email);
		const title = checkStr(_title);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		const collection = await users();
		const updateInfo = await collection.updateOne({ email: email }, { $push: { titles: title } });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully purchased frog",
		};
	},
	async updateTitle(_email, _titleIndex) {
		const email = checkStr(_email);
		const titleIndex = checkNum(_titleIndex);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		const collection = await users();
		const updateInfo = await collection.updateOne({ email: email }, { $set: { title: titleIndex } });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully purchased frog",
		};
	},
	//this is to update which frog is currently selected, not anything else
	async updateFrog(_email, _frogId) {
		const email = checkStr(_email);
		const frogId = checkFrogId(_frogId);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		const collection = await users();
		const updateInfo = await collection.updateOne({ email: email }, { $set: { frog: frogId } });
		if (updateInfo.modifiedCount < 1) throw `Could not update user successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully purchased frog",
		};
	},
	// given the email, frogId of the frog we're updating, and the newName
	// update the frog's name for that user
	async updateFrogName(_email, _frogId, _newName) {
		const email = checkStr(_email);
		const frogId = checkFrogId(_frogId);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		const frogOwned = user.frogNames.filter(object => object.id === frogId);
		if (frogOwned.length < 1) throw `This user does not own frog with frogId ${frogId}`;
		const updatedFrogNames = user.frogNames.map(object => (object.id === frogId ? { id: frogId, name: _newName } : object));
		console.log(updatedFrogNames);
		const collection = await users();
		const updateInfo = await collection.updateOne({ email: email }, { $set: { frogNames: updatedFrogNames } });
		if (updateInfo.modifiedCount < 1) throw `Could not update user's frogNames successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully purchased frog",
		};
	},
	async updatePrestige(_email) {
		const email = checkStr(_email);
		const userExists = await this.getUser(email);
		if (userExists.length < 1) throw "This user does not exist";
		const user = userExists[0];
		const collection = await users();
		const updatedUser = {
			...user,
			prestige: user.prestige + 1,
			level: 1,
			experience: 0,
			requiredExp: 100,
		};
		const updateInfo = await collection.updateOne({ email: email }, { $set: updatedUser });
		if (updateInfo.modifiedCount < 1) throw `Could not update user's frogNames successfully`;
		const updated = await this.getUser(email);
		if (updated.length < 1) throw "Could not get user";
		const data = updated[0];
		return {
			...data,
			password: "thats not very froggers of you",
			successMsg: "Successfully prestiged",
		};
	},
	// TODO: do the rest of the updates, Johnny doesn't have to do them yet because they're not part of his user stories
};
