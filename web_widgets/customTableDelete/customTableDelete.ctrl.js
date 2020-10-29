function PbTableCtrl($scope) {

    this.isArray = Array.isArray;

    this.isClickable = function() {
        return $scope.properties.isBound('selectedRow');
    };

    this.selectRow = function(row) {
        if (this.isClickable()) {
            $scope.properties.selectedRow = row;
        }
    };

    $scope.deleteContent = function(objContent) {
        console.log(objContent);
        var index = $scope.properties.content.indexOf(objContent);
        console.log(index);
        if(index != -1){
            $scope.properties.content.splice(index, 1);
        }
    }

    this.isSelected = function(row) {
        return angular.equals(row, $scope.properties.selectedRow);
    }
}