import React, { Component } from 'react';
import {connect} from 'react-redux';

//仿制action
const closePageAction=(ifshow)=>({
	type: 'showPage',
	showpage: ifshow
})


class Page extends Component {

	render() {

		const { content, show, pagetype } = this.props;

		let cls = "win-page-mask"; if (!show) cls = "win-page-mask hide";

		let pagecls = "win-page"; 
		switch (pagetype) {
			case "article": pagecls = "win-page article"; break;
			case "word": pagecls = "win-page word"; break;
			case "lyric": pagecls = "win-page lyric"; break;
			default: pagecls = "win-page";
		}
		if (!show) pagecls += " hide";

		let typecls = "win-page-content"; 

		return (
			<div>
				<div className={cls} onClick={this.clickMaskDiv.bind(this)}></div>
				<div className={pagecls}>
					<div className="win-page-title">{content.title || content.word}</div>
					<div className={typecls}>
						{
							content.article.map((item, index) => {
								return (<p key={index}>{item}</p>);
							})
						}
					</div>
				</div>
			</div>
		)
	}

	clickMaskDiv() {
		const { closePage } = this.props;
		closePage();
	}
}

const mapStateToProps = (state) => {
	//console.log(state)
	return {
		show: state.showpage,
		content: state.article,
		pagetype: state.pagetype
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		closePage: () => {
			dispatch(closePageAction(false));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);