import f1 from "../constants/frog01.jpg";
import f2 from "../constants/frog02.jpg";
import f3 from "../constants/frog03.jpg";

class frogs {
    constructor() {
        this.onClickForward = this.onClickForward.bind(this);
        this.onClickBackward = this.onClickBackwawrd.bind(this);

        this.state = {
            index: 0,
            imgList: [f1, f2, f3],
        };
    }

    onClickForward() {
        if (this.state.index + 1 >= this.state.imgList.length) this.setState({ index: 0 });
        else this.setState({ index: this.state.index + 1 });
    }

    onClickBackward() {
        if (this.state.index - 1 < 0) this.setState({ index: this.state.index.imgList.length - 1 });
        else this.setState({ index: this.state.index - 1 });
    }
}

export { frogs };
