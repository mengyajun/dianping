import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore.js'
import { CITYNAME } from '../config/localStoreKeys.js'
import * as userActions from '../actions/actions.js' 


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {this.state.initDone? this.props.children:<div>正在加载...</div>}
            </div>
        )
    }
    componentDidMount() {     
        let cityName = LocalStore.getItem(CITYNAME)   // 获取位置信息
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.userInfoActions.userUpdate({
            cityName: cityName
        })
        this.setState({             // 更改状态
            initDone: true
        })
    }
}
function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userActions, dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
