import React, {Component} from 'react';
import "./Item.css"
//Item 组件属于List组件的 只需要在List组件引入
export default class Item extends Component {

    delete = () =>{
        // 获得父元素的状态更新方法 LIST组件传来的
        let {deleteComment,userName} = this.props
        // 确认是否删除提示 如果是则删除
        if(window.confirm(`Are you sure to delete ${userName}\`s comment?`)){
            //1.获取要删除评论的Id 从List组件传来的userId获得
            let {userId} = this.props
            //2.删除上述ID 所对应的数据  用父组件传来的方法 更新父组件state状态
            deleteComment(userId)
        }

    }
    render() {
        //List组件传的有userName和content就只需要这个两个 所以this.props就等于这2个
        let {userName,content} = this.props
        return (
            <div>
                <li className="list-group item">
                    <div className="handle">
                        <a href="#1" onClick={this.delete}>Delete</a>
                        <p className="user"><span>{userName}</span><span> said:</span></p>
                        <p className="centence">{content}</p>
                    </div>
                </li>
            </div>
        )
    }
}
