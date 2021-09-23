'use strict';

import React, { Component } from 'react';

import {
    ViroARScene,
    ViroAmbientLight,
    Viro360Video,
    ViroPortal,
    ViroPortalScene,
    Viro3DObject,
} from 'react-viro';

var createReactClass = require('create-react-class');
var portal = createReactClass({
    getInitialState() {
        return {
            hasARInitialized: false,
            text: "Iniciando Aplicação Portal...",
        }
    },

    render: function () {
        return (
            <ViroARScene>
                <ViroAmbientLight color="#ffffff" intensity={200} />
                <ViroPortalScene passable={true} dragType='FixedDistance' onDrag={() => { }}>
                    <ViroPortal position={[0, 0, -1]} scale={[0.01, 0.01, 0.01]}>
                        <Viro3DObject source={require('./res/kodd_obj.obj')}
                            resources={[require('./res/kodd.mtl')]}
                            type="OBJ"
                             />
                    </ViroPortal>
                    <Viro360Video source={require('./res/basc.mp4')} loop={true} />
                </ViroPortalScene>
            </ViroARScene>
        );
    },
});

module.exports = portal;
