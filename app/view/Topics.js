/*
 * File: app/view/Topics.js
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

Ext.define('Fihrist.view.Topics', {
    extend: 'Ext.Container',

    config: {
        ui: '',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Fihrist'
            },
            {
                xtype: 'list',
                flex: 1,
                itemId: 'TopicsList',
                ui: 'round',
                scrollable: true,
                emptyText: 'No topics found',
                itemTpl: [
                    '<div>{Name}</div>'
                ],
                store: 'topics'
            }
        ],
        listeners: [
            {
                fn: 'onTopicsListSelect',
                event: 'select',
                delegate: '#TopicsList'
            }
        ]
    },

    onTopicsListSelect: function(dataview, record, eOpts) {
        console.log(record.get('Name')+" - record name");

        var subs = Ext.create('Fihrist.view.SubTopics', {
            floating: true,
            centered: true,
            width: '100%',
            height: '100%',
            title: record.get('Name'),
            html: 'This is the html'
        });

        // Reverse the slide direction before using setActiveItem()
        Ext.Viewport.getLayout().setAnimation({
            type: 'slide',
            direction: 'right'
        });

        Ext.Viewport.add(subs);
        this.hide();
        //subs.show();

        //KadanzaDemo.views.ideaEditor.load(record);
        //Ext.Viewport.setActiveItem('subs', { type: 'slide', direction: 'left' });
    }

});