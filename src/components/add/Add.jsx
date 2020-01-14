import React, {Component} from 'react';
import uuid from 'react-uuid';
import './Add.css';


export default class Add extends Component {

    //这里用了2种ref的获取方式
    contentRef = React.createRef()

    add = () =>{
        //1. 得到父组件传来更新状态的方法 该方法可以把用户的输入传入App状态
        let{addComment} = this.props

        //1.ref获取用户的输入
            let user_name  = this.userName.value.trim()
            let content = this.contentRef.current.value.trim()
        //2.检验数据格式
            if(user_name === '' || content === ''){
                alert('用户名或信息不能为空')
                return
            }
        //3.父组件方法需要对象才能传入 所以构建一个评论对象
            let obj = {userId:uuid(), userName:user_name, content:content}
        //4.更新状态 传入对象进更新方法
            addComment(obj)
        //5.清空输入框
            this.userName.value = "";
            this.contentRef.current.value ="";
    }

    render() {

        return (
            <div className="col-md-4">
                    <span>Username:</span>
                    <input type="text" className="user" placeholder=" username" ref={(input)=>{this.userName= input}}/>
                    <span >Message:</span>
                    <textarea className="message" placeholder=" Hi there..." ref={this.contentRef}/>
                    <button onClick={this.add}>Submit</button>
            </div>

        )
    }
}
