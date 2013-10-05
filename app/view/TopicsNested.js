/*
 * File: app/view/TopicsNested.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('Fihrist.view.TopicsNested', {
    extend: 'Ext.dataview.NestedList',

    config: {
        scrollable: true,
        detailCard: {
            xclass: 'Fihrist.view.DetailsView'
        },
        store: 'NestedTopics',
        title: 'fihrist',
        layout: {
            animation: 'slide',
            type: 'card'
        },
        listeners: [
            {
                fn: 'onNestedlistLeafItemTap',
                event: 'leafitemtap'
            }
        ]
    },

    onNestedlistLeafItemTap: function(nestedlist, list, index, target, record, e, eOpts) {
        var detailCard = nestedlist.getDetailCard();
        //detailCard.setHtml(record.get('vtext'));
        var VerseText = detailCard.getComponent( 'versetext' );
        VerseText.setHtml(record.get('vtext'));
        var audioURL = detailCard.getComponent('mp3player');
        audioURL.setUrl(record.get('url'));
    }

});