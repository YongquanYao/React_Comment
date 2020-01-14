import React, {Component} from 'react';
import Item from '../item/Item';
import "./List.css"

export default class List extends Component {

    render() {
        //接收App传来的更新state的方法 要传给Item组件
        let {deleteComment} = this.props
        //接收App传来的数据 用props接收
       let {comments} =  this.props
        return (

                <div className="col-md-8">
                    <h2 className="reply">COMMENT</h2>
                    <h3 style={{display:comments.length>0?'none':'block'}}>No message, Please leave your message.</h3>
                    <ul className="list-group">
                        {
                            comments.map((item)=>{
                                return <Item key={item.userId} userId={item.userId} userName={item.userName} content={item.content} deleteComment={deleteComment}/>
                            })
                        }
                    </ul>
                </div>

        )
    }
}
//  上面这里<Item/>组件不能写死，遍历得到的comments数组props决定的数量*/