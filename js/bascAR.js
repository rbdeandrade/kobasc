'use strict';

//imports

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroVideo,
  ViroImage,
  ViroAnimations,
  ViroNode,
} from 'react-viro';

//variáveis 

var createReactClass = require('create-react-class');

var VIDEO_REF1 = "videoref1";
var VIDEO_REF2 = "videoref2";
var VIDEO_REF3 = "videoref3";
var VIDEO_REF4 = "videoref4";
var VIDEO_REF5 = "videoref5";
var VIDEO_REF6 = "videoref6";

var bascAR = createReactClass({
  getInitialState() {
    return {
      currentAnim1: "scaleDown1",
      currentAnim2: "scaleDown2",
      currentAnim3: "scaleDown3",
      currentAnim4: "scaleDown4",
      currentAnim5: "scaleDown5",
      currentAnim6: "scaleDown6",
      videoPaused1: true,
      videoPaused2: true,
      videoPaused3: true,
      videoPaused4: true,
      videoPaused5: true,
      videoPaused6: true,
      loopVideo: true,
      videoIndex: 0,
      pauseUpdates: false,
    }
  },

  //Cena

  render: function () {
    return (
      <ViroARScene >
        <ViroARImageMarker
          target={"targetOne"}
          onAnchorFound={this._onAnchorFound}
          pauseUpdates={this.state.pauseUpdates}>
          <ViroNode scale={[0, 0, 0]} transformBehaviors={["billboardY"]}>
            <ViroVideo // primeiro esquerda, de cima para baixo
              ref={VIDEO_REF2}
              source={require('./res/vid/Glayton_low.mp4')}
              volume={1.0}
              position={[-1.3, -6, -1.32]}
              scale={[1.4, 0.8, 0]}
              rotation={[-90, 0, 0]}
              loop={this.state.loopVideo}
              paused={this.state.videoPaused2}
              onClick={this._togglePauseVideo2}
              animation={{
                name: this.state.currentAnim2,
                run: true,
                interruptible: true
              }}
            />
            <ViroVideo // primeiro direita, de cima para baixo
              ref={VIDEO_REF5}
              source={require('./res/vid/Marcela_low.mp4')}
              volume={1.0}
              position={[1.2, -6, -2.6]}
              scale={[1.4, 0.8, 0]}
              rotation={[-90, 0, 0]}
              loop={this.state.loopVideo}
              paused={this.state.videoPaused5}
              onClick={this._togglePauseVideo5}
              animation={{
                name: this.state.currentAnim5,
                run: true,
                interruptible: true
              }} />
            <ViroVideo // segundo esquerda, de cima para baixo
              ref={VIDEO_REF3}
              source={require('./res/vid/Anderson_low.mp4')}
              volume={1.0}
              position={[-1.3, -6, 1]}
              scale={[1.4, 0.8, 0]}
              rotation={[-90, 0, 0]}
              loop={this.state.loopVideo}
              paused={this.state.videoPaused3}
              onClick={this._togglePauseVideo3}
              animation={{
                name: this.state.currentAnim3,
                run: true,
                interruptible: true
              }} />
            <ViroVideo // segundo direita, de cima para baixo
              ref={VIDEO_REF4}
              source={require('./res/vid/George_low.mp4')}
              volume={1.0}
              position={[1.3, -6, -0.1]}
              scale={[1.4, 0.8, 0]}
              rotation={[-90, 0, 0]}
              loop={this.state.loopVideo}
              paused={this.state.videoPaused4}
              onClick={this._togglePauseVideo4}
              animation={{
                name: this.state.currentAnim4,
                run: true,
                interruptible: true
              }} />
            <ViroVideo // terceiro esquerda, de cima para baixo
              ref={VIDEO_REF1}
              source={require('./res/vid/Thabata_low.mp4')}
              volume={1.0}
              position={[-1.4, -6, 3.2]}
              scale={[1.4, 0.8, 0]}
              rotation={[-90, 0, 0]}
              loop={this.state.loopVideo}
              paused={this.state.videoPaused1}
              onClick={this._togglePauseVideo1}
              animation={{
                name: this.state.currentAnim1,
                run: true,
                interruptible: true
              }} />
            <ViroVideo // terceiro direita, de cima para baixo
              ref={VIDEO_REF6}
              source={require('./res/vid/Larissa_low.mp4')}
              volume={1.0}
              position={[1.4, -6, 2.1]}
              scale={[1.4, 0.8, 0]}
              rotation={[-90, 0, 0]}
              loop={this.state.loopVideo}
              paused={this.state.videoPaused6}
              onClick={this._togglePauseVideo6}
              animation={{
                name: this.state.currentAnim6,
                run: true,
                interruptible: true
              }} />


            <ViroImage // backvideo
              source={require('./res/restart.png')}
              position={[0, -6, 4.5]}
              rotation={[-90, 0, 0]}
              scale={[0.7, 0.7, 0]}
              onClick={this._restartVideo} />


            <ViroImage //background
              source={require('./res/back.jpg')}
              rotation={[-90, 0, 0]}
              position={[0, -10, 1]}
              scale={[9, 19, 0]} />
          </ViroNode>
        </ViroARImageMarker>
      </ViroARScene>
    )
  },

  //Restart
  _restartVideo() {
    this.refs[VIDEO_REF1].seekToTime(0);
    this.refs[VIDEO_REF2].seekToTime(0);
    this.refs[VIDEO_REF3].seekToTime(0);
    this.refs[VIDEO_REF4].seekToTime(0);
    this.refs[VIDEO_REF5].seekToTime(0);
    this.refs[VIDEO_REF6].seekToTime(0);
  },

  //Play,Pause
  _togglePauseVideo1() {
    this.setState({
      videoPaused1: !this.state.videoPaused1,
    })

    if (this.state.currentAnim1 == "scaleDown1") {
      this.setState({
        currentAnim1: "scaleUp1",
      });
    } else {
      this.setState({
        currentAnim1: "scaleDown1",
      });
    }

  },
  _togglePauseVideo2() {
    this.setState({
      videoPaused2: !this.state.videoPaused2,
    })

    if (this.state.currentAnim2 == "scaleDown2") {
      this.setState({
        currentAnim2: "scaleUp2",
      });
    } else {
      this.setState({
        currentAnim2: "scaleDown2",
      });
    }

  },
  _togglePauseVideo3() {
    this.setState({
      videoPaused3: !this.state.videoPaused3,
    })

    if (this.state.currentAnim3 == "scaleDown3") {
      this.setState({
        currentAnim3: "scaleUp3",
      });
    } else {
      this.setState({
        currentAnim3: "scaleDown3",
      });
    }

  },
  _togglePauseVideo4() {
    this.setState({
      videoPaused4: !this.state.videoPaused4,
    })

    if (this.state.currentAnim4 == "scaleDown4") {
      this.setState({
        currentAnim4: "scaleUp4",
      });
    } else {
      this.setState({
        currentAnim4: "scaleDown4",
      });
    }

  },
  _togglePauseVideo5() {
    this.setState({
      videoPaused5: !this.state.videoPaused5,
    })

    if (this.state.currentAnim5 == "scaleDown5") {
      this.setState({
        currentAnim5: "scaleUp5",
      });
    } else {
      this.setState({
        currentAnim5: "scaleDown5",
      });
    }

  },
  _togglePauseVideo6() {
    this.setState({
      videoPaused6: !this.state.videoPaused6,
    })

    if (this.state.currentAnim6 == "scaleDown6") {
      this.setState({
        currentAnim6: "scaleUp6",
      });
    } else {
      this.setState({
        currentAnim6: "scaleDown6",
      });
    }

  },

  // ação ao pegar Target
  _onAnchorFound() {
    this.setState({
      pauseUpdates: true,
    })
  },
});

//Target

ViroARTrackingTargets.createTargets({
  "targetOne": {
    source: require('./res/targetOne.jpg'),
    orientation: "up",
    physicalWidth: 1.1 // em metros
  },
});

// Animações

ViroAnimations.registerAnimations({
  scaleUp1: {
    properties: {
      scaleX: 5, scaleY: 3, scaleZ: 0,
      positionX: 0, positionY: -4, positionZ: 1.6,

    },
    duration: 500, easing: "easyIn"//.5 seconds
  },
  scaleDown1: {
    properties: {
      scaleX: 1.4, scaleY: 0.8, scaleZ: 0,
      positionX: -1.4, positionY: -6, positionZ: 3.2,
    },
    duration: 500, easing: "easyOut"//.5 seconds
  },
  scaleUp2: {
    properties: {
      scaleX: 5, scaleY: 3, scaleZ: 0,
      positionX: 0, positionY: -4, positionZ: 1.6,
    },
    duration: 500, easing: "easyIn"//.5 seconds
  },
  scaleDown2: {
    properties: {
      scaleX: 1.4, scaleY: 0.8, scaleZ: 0,
      positionX: -1.3, positionY: -6, positionZ: -1.32,
    },
    duration: 500, easing: "easyOut"//.5 seconds
  },
  scaleUp3: {
    properties: {
      scaleX: 5, scaleY: 3, scaleZ: 0,
      positionX: 0, positionY: -4, positionZ: 1.6,

    },
    duration: 500, easing: "easyIn"//.5 seconds
  },
  scaleDown3: {
    properties: {
      scaleX: 1.4, scaleY: 0.8, scaleZ: 0,
      positionX: -1.3, positionY: -6, positionZ: 1,
    },
    duration: 500, easing: "easyOut"//.5 seconds
  },
  scaleUp4: {
    properties: {
      scaleX: 5, scaleY: 3, scaleZ: 0,
      positionX: 0, positionY: -4, positionZ: 1.6,

    },
    duration: 500, easing: "easyIn"//.5 seconds
  },
  scaleDown4: {
    properties: {
      scaleX: 1.4, scaleY: 0.8, scaleZ: 0,
      positionX: 1.3, positionY: -6, positionZ: -0.1,

    },
    duration: 500, easing: "easyOut"//.5 seconds
  },
  scaleUp5: {
    properties: {
      scaleX: 5, scaleY: 3, scaleZ: 0,
      positionX: 0, positionY: -4, positionZ: 1.6,

    },
    duration: 500, easing: "easyIn"//.5 seconds
  },
  scaleDown5: {
    properties: {
      scaleX: 1.4, scaleY: 0.8, scaleZ: 0,
      positionX: 1.2, positionY: -6, positionZ: -2.6,
    },
    duration: 500, easing: "easyOut"//.5 seconds
  },
  scaleUp6: {
    properties: {
      scaleX: 5, scaleY: 3, scaleZ: 0,
      positionX: 0, positionY: -4, positionZ: 1.6,

    },
    duration: 500, easing: "easyIn"//.5 seconds
  },
  scaleDown6: {
    properties: {
      scaleX: 1.4, scaleY: 0.8, scaleZ: 0,
      positionX: 1.4, positionY: -6, positionZ: 2.1,
    },
    duration: 500, easing: "easyOut"//.5 seconds
  },
});

module.exports = bascAR;