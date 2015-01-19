/**
 * @name: main.js
 * @author: Noemi Losada <noemi@mendeley.com>
 * @date: 19/01/2015
 * @version: 0.0.1
 */

jQuery(function($) {
    'use strict';

    /**
     * Constructor first component
     * 
     * @method helloWord
     * @return {Void}
     */
    var helloWorld = flight.component(function() {
        var msg = "Hello World!";

        // Click event handler
        this.onClick = function(event) {
            event.stopPropagation();
            this.$node.text(msg);
        };

        // Initialize
        this.after("initialize", function() {
            this.on('click', this.onClick);
        });
    });

    /**
     * Constructor hide and show component
     * 
     * @method hideShow
     * @return {Void}
     */
    var hideShow = flight.component( function() {
        // Attributes
        this.defaultAttrs({
            spanHideShow: 'span'
        });

        // Click event to toggle content visibility
        this.onClick = function() {
            this.select('spanHideShow').animate({ width: "toggle" }, 500);
        };

        // Initialize
        this.after("initialize", function() {
            this.select('spanHideShow').hide(); // Hide text by default
            this.on('click', this.onClick);
        });
    });

    /**
     * Attach components to the DOM
     */
    helloWorld.attachTo('.hello-world');
    hideShow.attachTo('.hide-show');

});
