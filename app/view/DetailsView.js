/*
 * File: app/view/DetailsView.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Fihrist.view.DetailsView', {
    extend: 'Ext.Panel',

    config: {
        ui: '',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'audio',
                hidden: true,
                itemId: 'mp3player'
            },
            {
                xtype: 'button',
                centered: false,
                docked: 'top',
                html: '<img src="resources/btns/play.png" />',
                itemId: 'controls',
                margin: '20 auto',
                maxWidth: '80%',
                iconAlign: 'center'
            },
            {
                xtype: 'sliderfield',
                centered: false,
                docked: 'top',
                itemId: 'mp3slider',
                margin: '0 auto 5px',
                maxWidth: '80%',
                labelAlign: 'right',
                name: 'MP3Slider'
            },
            {
                xtype: 'component',
                centered: true,
                itemId: 'versetext',
                padding: '0 10% 0 10%',
                ui: 'light'
            }
        ],
        listeners: [
            {
                fn: 'onMp3playerTimeupdate',
                event: 'timeupdate',
                delegate: '#mp3player'
            },
            {
                fn: 'onControlsTap',
                event: 'tap',
                delegate: '#controls'
            },
            {
                fn: 'onMp3sliderDrag',
                event: 'drag',
                delegate: '#mp3slider'
            },
            {
                fn: 'onMp3sliderDragEnd',
                event: 'dragend',
                delegate: '#mp3slider'
            }
        ]
    },

    onMp3playerTimeupdate: function(media, time, eOpts) {
        var duration = media.getDuration();
        var mp3slider = media.getParent().down('sliderfield');
        var position = (time / duration) * 100;
        mp3slider.setValue(position);

        var tick = Math.floor(duration);
        var mins = Math.floor(tick/60);
        var secs = tick % 60;
        var tock = (mins < 10 ? "0" : "" ) + mins + ":" + (secs < 10 ? "0" : "" ) + secs;

        duration = tock;

        tick = Math.floor(time);
        mins = Math.floor(tick/60);
        secs = tick % 60;
        tock = (mins < 10 ? "0" : "" ) + mins + ":" + (secs < 10 ? "0" : "" ) + secs;
        position = tock;

        mp3slider.setLabel( position + '<br /><hr />' + duration);

        var button = media.getParent().down('button');
        if ( position == duration ) {
            media.pause();
            button.setHtml('<img src="resources/btns/play.png" />');
        }

    },

    onControlsTap: function(button, e, eOpts) {
        var audio = this.getParent().down('audio');
        if (audio.isPlaying()) {
            audio.pause();
            button.setHtml('<img src="resources/btns/play.png" />');
        } else {
            audio.play();
            button.setHtml('<img src="resources/btns/pause.png" />');
            var audioDurationnum = audio.getDuration();

            var mp3slider = this.getParent().down('sliderfield');

            var tick = Math.floor(audioDurationnum);
            var mins = Math.floor(tick/60);
            var secs = tick % 60;
            var tock = (mins < 10 ? "0" : "" ) + mins + ":" + (secs < 10 ? "0" : "" ) + secs;

            mp3slider.setLabel(tock);
        }
    },

    onMp3sliderDrag: function(sliderfield, sl, thumb, e, eOpts) {
        var audio = this.getParent().down('audio');
        audio.pause();

        var button = this.getComponent('controls');
        button.setHtml('<img src="resources/btns/play.png" />');
    },

    onMp3sliderDragEnd: function(sliderfield, sl, thumb, value, e, eOpts) {
        var audio = this.getComponent('mp3player');

        var duration = audio.getDuration();

        var position = value;
        sliderfield.setValue(position);

        position = ((value / 100) * duration);

        audio.setCurrentTime(position);

        var tick = Math.floor(duration);
        var mins = Math.floor(tick/60);
        var secs = tick % 60;
        var tock = (mins < 10 ? "0" : "" ) + mins + ":" + (secs < 10 ? "0" : "" ) + secs;

        duration = tock;


        tick = Math.floor(position);
        mins = Math.floor(tick/60);
        secs = tick % 60;
        tock = (mins < 10 ? "0" : "" ) + mins + ":" + (secs < 10 ? "0" : "" ) + secs;
        position = tock;

        sliderfield.setLabel( position + '<br /><hr />' + duration);

        audio.play();

        var button = this.getComponent('controls');
        button.setHtml('<img src="resources/btns/pause.png" />');
    }

});