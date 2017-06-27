import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { postComment } from '../../../fetch/user/orderlist.js'
import './orderItem.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            commentState:0 //三种状态，0表示未评价，1表示正在评价中，2表示已评价
        }
    }
    render() {
        const data = this.props.data
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img}/>
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>数量：{data.count}</span>
                    <span>价格：￥{data.price}</span>
                </div>
                <div>
                    {
                        this.state.commentState  === 0 ?
                        <button onClick={this.commentShow.bind(this)} className="float-right btn">评价</button> :
                        this.state.commentState  === 1 ?
                        <div className="comment-text-container">
                            <textarea ref="commentBox" className="submitBox"></textarea> 
                            <button onClick={this.commentSubmit.bind(this)} className="btn operbtn ">提交</button>
                            <button onClick={this.cancelComment.bind(this)} className="btn operbtn">取消</button>
                        </div>:
                        <button className="btn unseleted-btn float-right">已评价</button>
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            commentState:this.props.data.commentState
        })
    }
    commentShow(){
        this.setState({
            commentState:1
        })
    }
    commentSubmit(){
        const id = this.props.data.id;
        const commentVal = this.refs.commentBox.value.trim();
        if (commentVal) {
            const res = postComment(id,commentVal);
            res.then(res => {
                return res.json()
            }).then(res => {
                if (res.msg === "ok") {
                    alert("保存成功")
                }
            })
            this.setState({
                commentState:2
            })
        }else{
            alert("请输入内容再提交");
            return false;
        }
    }
    cancelComment(){
        this.setState({
            commentState:0
        })
    }
}

export default Item