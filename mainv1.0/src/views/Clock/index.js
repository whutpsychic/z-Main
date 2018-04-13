import React, { Component } from 'react';

/*************************************************************/
//Canvas画钟表程序
//
//【注】本部分componentDidMount之内的代码版权归
//
//【HTML5、Canvas核心技术】（机械工业出版社）David Geary所有
//
/*************************************************************/

var Go;

class Clock extends Component {

	render() {
		return (<canvas ref="container" ></canvas>);
	}

	componentDidMount() {

		var canvas = this.refs.container,
			canvasContext = canvas.getContext('2d'),
			FONT_HEIGH = 20,
			MARGIN = 50,
			HAND_TRUNCATION = canvas.width / 12,
			HOUR_HAND_TRUNCATION = canvas.width / 8,

			CIRECLE_EIDTH = 1,
			HOURHAND_WIDTH = 10,
			MINUTEHAND_WIDTH = 5,
			SECONDHAND_WIDTH = 2,

			NUMERAL_SPACING = 20,
			RADIUS = canvas.width / 2 - MARGIN + 50,
			HAND_RADIUS = RADIUS + NUMERAL_SPACING;

		//设置像素
		canvas.width = 800; canvas.height = 400;
		canvasContext.fillStyle = '#fff';
		canvasContext.strokeStyle = '#fff';

		//线条粗细
		//canvasContext.lineWidth = 6;


		//draw clock plate circle
		function drawCircle() {
			canvasContext.lineWidth = CIRECLE_EIDTH;

			canvasContext.beginPath();
			canvasContext.arc(canvas.width / 2, canvas.height / 2,
				RADIUS, 0, Math.PI * 2, true
			);
			canvasContext.stroke();
		}

		//draw numbers
		function drawNumerals() {
			var numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				angle = 0,
				numeralWidth = 0;

			numerals.forEach((numeral) => {
				angle = Math.PI / 6 * (numeral - 3);
				numeralWidth = canvasContext.measureText(numeral).width;
				canvasContext.fillText(numeral,
					canvas.width / 2 + Math.cos(angle) * (HAND_RADIUS) - numeralWidth / 2,
					canvas.height / 2 + Math.sin(angle) * (HAND_RADIUS) + FONT_HEIGH / 3)
			})
		}

		//draw center point
		function drawCenter() {
			canvasContext.beginPath();
			canvasContext.arc(canvas.width / 2, canvas.height / 2, 2, 0, Math.PI * 2, true);
			canvasContext.fill();
		}

		//each hand
		function drawHand(loc, isHour) {

			var angle = (Math.PI * 2) * (loc / 60) - Math.PI / 2,
				handRadius = isHour ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION : RADIUS - HAND_TRUNCATION;

		
			canvasContext.moveTo(canvas.width / 2, canvas.height / 2);
			canvasContext.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius,
				canvas.height / 2 + Math.sin(angle) * handRadius);
			canvasContext.stroke();
		}

		//three pointer
		function drawHands() {
      var date = new Date(),
        hour = date.getHours();
				hour = hour > 12 ? hour - 12 : hour;

			//hour
			canvasContext.lineWidth = HOURHAND_WIDTH;
			drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true, 'hour');
			//minutes
			canvasContext.lineWidth = MINUTEHAND_WIDTH;
			drawHand(date.getMinutes(), false, 'minute');
			//seconds
			canvasContext.lineWidth = SECONDHAND_WIDTH;
			drawHand(date.getSeconds(), false, 'second');
		}

		//main
		function drawClock() {
			canvasContext.clearRect(0, 0, canvas.width, canvas.height);

			drawCircle();
			drawCenter();
			drawHands();
			drawNumerals();
		}

		canvasContext.font = FONT_HEIGH + 'px Arial';
		drawClock();
	  Go = setInterval(drawClock, 1000);
	}

	componentWillUnmount() {
		window.clearInterval(Go);
	}

}


export default Clock;
