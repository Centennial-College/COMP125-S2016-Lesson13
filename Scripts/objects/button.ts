module objects {
    export class Button extends createjs.Bitmap {
        constructor(
            pathString: string,
            x: number,
            y: number,
            isCentered: boolean
        ) {
            super(pathString);

            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }

            this.x = x;
            this.y = y;

            this.on('mouseover', this._mouse_over, this);
            this.on('mouseout', this._mouse_out, this);
        }

        /**
         * This event handler triggers when the mouse is over the Button
         * 
         * @private
         * @method _mouse_over
         * @return {void}
         */
        private _mouse_over(): void {
            this.alpha = 0.7; // 30% transparent
        }

        /**
         * This event handler triggers when the mouse leaves the button
         * 
         * @private
         * @method _mouse_out
         * @return {void}
         */
        private _mouse_out(): void {
            this.alpha = 1.0; // 100% opaque
        }
    }
}