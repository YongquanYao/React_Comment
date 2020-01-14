import React,{Component} from 'react';
import './App.css';
import List from "./components/list/List";
import Add from "./components/add/Add";
//import uuid from 'react-uuid';



class App extends Component{
    //真实情况这里的数据是从数据库来的
    //传递给list
    state = {comments:[
        ]}

        //更新状态对象的方法只能在自身
        //  1.解包原状态对象
        //  2.传一个新对象存入状态对象 来达到更新
        //  3.更新状态
        //  4.把方法传给子组件Add使用, 以达到最后效果
    addComment = (commentObj) =>{
        //解包原状态对象
        let comments = [...this.state.comments]
        //传入新的对象进数组
        comments.unshift(commentObj)
        //更新状态
        this.setState({comments})
    }
    //传一个id名字过来
    deleteComment = (userId) =>{
        let comments = [...this.state.comments]
        //map会生成新数组，可返回
        //forEach 简单遍历不会生成新数组 ，遍历得对应数组对象的id与传入的Id相等就删除
        comments.forEach((item,index)=>{
            if(item.userId === userId){
                //相等就删除更新state
                //对数组进行增删.splice()     去搞清楚 slice(), splite()
                //删除当前的
                comments.splice(index,1)
            }
        })
        //更新状态
        this.setState({comments})
            //最后需要传递给List组件来 借List组件传递给Item
    }

  render() {
     let{comments} = this.state

    return(
        <div>
          <header className="site-header jumbotron">
            <div className="header-container">
              <h1>Leave Your Message</h1>
            </div>
          </header>
          <div className="container">
            <Add addComment={this.addComment}/>
            <List comments={comments} deleteComment={this.deleteComment}/>
          </div>
        </div>
    )

  }
}

export default App;
