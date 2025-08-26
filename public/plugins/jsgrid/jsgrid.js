// ...existing code above...

        _createEditButton: function(item) {
            return this._createGridButton(this.editButtonClass, this.editButtonTooltip, function(grid, e) {
                grid.editItem(item);
                e.stopPropagation();
            }, '<i class="fa fa-edit"></i>');
        },

        _createDeleteButton: function(item) {
            return this._createGridButton(this.deleteButtonClass, this.deleteButtonTooltip, function(grid, e) {
                grid.deleteItem(item);
                e.stopPropagation();
            }, '<i class="fa fa-trash"></i>');
        },

        _createSearchButton: function() {
            return this._createGridButton(this.searchButtonClass, this.searchButtonTooltip, function(grid) {
                grid.search();
            }, '<i class="fa fa-search"></i>');
        },

        _createClearFilterButton: function() {
            return this._createGridButton(this.clearFilterButtonClass, this.clearFilterButtonTooltip, function(grid) {
                grid.clearFilter();
            }, '<i class="fa fa-eraser"></i>');
        },

        _createInsertButton: function() {
            return this._createGridButton(this.insertButtonClass, this.insertButtonTooltip, function(grid) {
                grid.insertItem().done(function() {
                    grid.clearInsert();
                });
            }, '<i class="fa fa-plus"></i>');
        },

        _createUpdateButton: function() {
            return this._createGridButton(this.updateButtonClass, this.updateButtonTooltip, function(grid, e) {
                grid.updateItem();
                e.stopPropagation();
            }, '<i class="fa fa-save"></i>');
        },

        _createCancelEditButton: function() {
            return this._createGridButton(this.cancelEditButtonClass, this.cancelEditButtonTooltip, function(grid, e) {
                grid.cancelEdit();
                e.stopPropagation();
            }, '<i class="fa fa-times"></i>');
        },

        _createGridButton: function(cls, tooltip, clickHandler, iconHtml) {
            var grid = this._grid;

            return $("<button>").addClass(this.buttonClass)
                .addClass(cls)
                .attr({
                    title: tooltip,
                    type: "button"
                })
                .html(iconHtml)
                .on("click", function(e) {
                    clickHandler(grid, e);
                });
        },

// ...rest of the file...