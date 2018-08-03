
$(function () {

    var btnEdit = $('#l-header button.edit');
    var btnCancel = $('#l-header button.cancel');
    var btnSave = $('#l-header button.save');
    var employeeSelects = $('#l-header select.employee');
    var selectWrappers = $('.employee-select');
    var linkWrappers = $('.employee-link');
    var employees = JSON.parse($('#employeeUserNamesJSON').val()).employees;

    employeeSelects.select2();

    var setEmployeeLink = function (selectId) {
        var employeeId = parseInt($(selectId).val());
        var userName = '', fullName = '';
        var filteredEmployees = employees.filter(function (x) {
            return x.EmployeeId === employeeId;
        });
        if (filteredEmployees.length === 1) {
            userName = filteredEmployees[0].UserName;
            fullName = filteredEmployees[0].FullName;
        }

        var linkId = selectId + 'Link';
        console.log(linkId)
        console.log($(linkId).length);
        $(linkId).attr('href', 'mailto:' + userName + '@test.com');
        $(linkId).text(fullName);
    };

    employeeSelects.change(function () {
        setEmployeeLink('#' + $(this).attr('id'));
        return false;
    });

    employeeSelects.each(function(){
        setEmployeeLink('#' + $(this).attr('id'));
    });

    setEmployeeLink('#employeeAId');
    setEmployeeLink('#employeeBId');

    btnEdit.click(function () {
        btnEdit.hide();
        btnCancel.show();
        btnSave.show();
        employeeSelects.prop('disabled', false);
        linkWrappers.hide();
        selectWrappers.show();
        return false;
    });

    btnCancel.click(function () {
        btnEdit.show();
        btnCancel.hide();
        btnSave.hide();
        employeeSelects.prop('disabled', true);
        linkWrappers.show();
        selectWrappers.hide();
        return false;
    });

    btnSave.click(function () {
        btnEdit.show();
        btnCancel.hide();
        btnSave.hide();
        employeeSelects.prop('disabled', true);
        linkWrappers.hide();
        selectWrappers.show();
        linkWrappers.show();
        selectWrappers.hide();
        return false;
    });

});