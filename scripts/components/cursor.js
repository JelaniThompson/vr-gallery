AFRAME.registerComponent('cursor-listener', {
    init: function() {
        // When gazing at an item, change from Black to Red
        const gazeColor = 'red';
        this.el.addEventListener('click', function (event) {
            this.setAttribute('material', 'color', gazeColor);
            console.log('Don\'t make me blush!');
        })
    }
});