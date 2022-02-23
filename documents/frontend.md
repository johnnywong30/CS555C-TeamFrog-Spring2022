# Frontend Documentation

## React
Install React Devtool Extension in your browser to see changes live.

Our front end views are generated dynamically using ReactJS. Instead of writing our own HTML pages, we will be generating them using JSX and React Components. JSX looks like a combination between HTML and JavaScript. You can think of React Components as objects or classes in other object-oriented languages like Java. With that in mind, React Components can then have a familiar tree model, with components having children that they can pass down attributes (i.e. props) to. These attributes can be values, functions, and whatever else you probably can think of in JavaScript. Here is an example:
```js
const ButtonGroup = () => {
    const text = 'apple'
    return (
        <Flex justifyContent="center">
            <Button variant="primary">{text}</Button>
            <Button variant="secondary">{text}</Button>
        </Flex>
    )
}
```
Some props here are `justifyContent` and `variant`. This `ButtonGroup` component can then be exported and used elsewhere as `<ButtonGroup/>` in another JSX file.

## Redux
Install ReduxDevTools extension in your browser in order to be able to see state changes live.

Our global state management system will be Redux. In Redux, we will be able to have access to state variables globally through this concept called a store. Don't worry about the implementation or anything about the store, it's already been dealt with and all components will be able to retrieve anything from it. 

The store holds all of our current state values. 
In order to fetch data from our store, use the hook `useSelector` in order to hook into a piece of state you want to utilize. An example is: 

```const isAuth = useSelector(({ auth }) => auth.auth)```
This lets us have access to the piece of state that tells us if our current user is authenticated right now.

In order to change pieces of state, we dispatch actions. An example of this is `dispatch(notifyClear())` on line 18 of `/client/src/routes/Pages/Form.js`. What this does is we're dispatching an action to clear a notification. This tells the store what kind of action is happening and if there is something being sent with it (i.e. a payload.) Actions will be written in `/client/src/redux/actions`. Follow the examples in `auth.js` and `common.js` when you are making more action functions. These general actions are not supposed to have ANY complex logic at all. All they are doing is setting and updating variables after some payload (maybe no payload) is passed into it. 

These actions don't do anything without a handler that knows what to do with them. Reducers are what handle actions and also decide what an initial state looks like. Reducers create different sections of state that can be manipulated when an action is dispatched. Different types of actions are handled using a switch case statement. 

All reducers will be written in `/client/src/redux/reducers` and then added into `/client/src/redux/reducers/index.js`.

Although it might seem like we're sectioning off each different piece of state, we end up combining all of these reducers into one reducer and utilizing that in the store to have access to every piece of state. We just have to select what we want. We're sectioning off each different reducer in order to write cleaner code.

## Interacting with MongoDB and Our Backend
Most of our interactions with our server will be for MongoDB calls and requests. We will be making asynchronous actions to deal with these server calls. These actions, similar to the Redux actions, will be sectioned off into their own files in `/client/src/services/mongo` and then imported into `/client/src/mongo/index.js`. These actions are often complex and require some logic in order to clean up input data to be sent back to our server. Since these actions are asynchronous, we will have to use certain common actions such as `startLoading` and `endLoading` to provide feedback to our user that we are retrieving information from our server. Use `.../services/mongo/auth.js` and `.../services/mongo/user.js` as examples for CRUD methods and interacting with our MongoDB.

## Misc
If you have any questions when writing features, ask Johnny for a workflow of what you might need to do. For a small feature, you might still have to interact with the store/Redux in order for the whole app to know that some state changed.