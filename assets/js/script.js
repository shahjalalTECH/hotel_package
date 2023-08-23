//Country Flag

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

$(document).ready(function () {
    // Password field hide and show
    $(".bb-input-password .fa-solid").on("click", function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        if ($(this).hasClass('fa-eye-slash')) {
            $(this).parent('.bb-input-password').find('input').attr('type', 'text');
        } else {
            $(this).parent('.bb-input-password').find('input').attr('type', 'password');
        }
    });

    // Select To Plugin with search
    $('.js-example-basic-single').select2();
    $('.js-example-basic-multiple').select2();

    // Date Picker
    $('#basicDate').flatpickr();

    // Append input fields

    $(document).on("click", ".bbb-add-btn", function () {
        $(".bbb-form-field-item-append-field-parent").append(`<div class="bbb-new-append-field">
        <input type="text">
        <button type="button" class="bbb-add-btn"><i class="fa-solid fa-plus"></i></button>
        <button type="button" class="bbb-remove-btn"><i class="fa-solid fa-minus"></i></button>
    </div>`);
    });
    $(document).on("click", ".bbb-remove-btn", function () {
        $(".bbb-new-append-field:last-child").remove();
    });


    // Table crud operation

    $(document).on("click", ".bbb-add-hotel", function () {
        $(".bbb-hotel-detailes-model-main-parent").css("display", "flex");
        $(".bbb-hotel-detailes-model-main-parent .bbb-hotel-detailes-save-btn").css("display", "none");
        $(".bbb-hotel-detailes-edit-delete-btns .bbb-hotel-detailes-add-btn").css("display", "block");
    });

    $(document).on("click", ".bbb-hotel-detailes-cancel-btn", function () {
        $(".bbb-hotel-detailes-model-main-parent").css("display", "none");
    });

    let count = 0;
    $(document).on("click", ".bbb-hotel-detailes-add-btn", function () {
        count++;
        let hotel_duration_val = $(".bbb-hotel-duration-val").val();
        let hotel_name_val = $(".bbb-hotel-name-val").val();
        let hotel_inclusion_val = $(".bbb-hotel-inclusion-val").val();

        $(".bbb-hotel-detailes-model-main-parent").css("display", "none");
        $(".bbb-hotel-details-table table").append(`<tr data-type="bbb-row-${count}" class="bbb-row-tr bbb-row-${count}">
        <td class="hotel-duration-content"> ${hotel_duration_val} </td>
        <td class="hotel-name-content"> ${hotel_name_val}</td>
        <td class="hotel-inclusion-content">${hotel_inclusion_val}</td>
        <td>
            <div class="bbb-double-btns-parent">
                <button class="bbb-edit-btn" type="button" data-count="${count}">Edit</button>
                <button class="bbb-delete-btn" type="button">Delete</button>
            </div>
        </td>
    </tr>`);
    });

    $(document).on("click", ".bbb-delete-btn", function () {
        $(this).parents("tr").css("display", "none");
    });

    $(document).on("click", ".bbb-edit-btn", function () {
        var rowCount = $(this).data('count');
        $(".bbb-hotel-detailes-model-main-parent").css("display", "flex");
        $(".bbb-hotel-detailes-model-main-parent .bbb-hotel-detailes-save-btn").css("display", "block");
        $(".bbb-hotel-detailes-edit-delete-btns .bbb-hotel-detailes-add-btn").css("display", "none");



        let hotel_duration_content = $(this).parents("tr").find(".hotel-duration-content").text();
        let hotel_name_content = $(this).parents("tr").find(".hotel-name-content").text();
        let hotel_inclusion_content = $(this).parents("tr").find(".hotel-inclusion-content").text();
        $('.bbb-hotel-detailes-update-btn').attr('data-count', rowCount);
        console.log(hotel_duration_content,hotel_name_content,hotel_inclusion_content)
        $(".bbb-hotel-duration-val").val(hotel_duration_content).trigger("chosen:updated");
        $(".bbb-hotel-name-val").val(hotel_name_content).trigger("chosen:updated");
        $(".bbb-hotel-inclusion-val").val(hotel_inclusion_content).trigger("chosen:updated");


    });

    $(document).on('click', '.bbb-hotel-detailes-update-btn', function () {
        var rowCount = $(this).data('count');
        let hotel_duration_val = $(".bbb-hotel-duration-val").val();
        let hotel_name_val = $(".bbb-hotel-name-val").val();
        let hotel_inclusion_val = $(".bbb-hotel-inclusion-val").val();
        $(".bbb-hotel-detailes-model-main-parent").hide();
        $('.bbb-row-' + rowCount).html(`
            <td class="hotel-duration-content"> ${hotel_duration_val} </td>
            <td class="hotel-name-content"> ${hotel_name_val}</td>
            <td class="hotel-inclusion-content">${hotel_inclusion_val}</td>
            <td>
                <div class="bbb-double-btns-parent">
                    <button class="bbb-edit-btn" type="button" data-count="${count}">Edit</button>
                    <button class="bbb-delete-btn" type="button">Delete</button>
                </div>
            </td>
        `);
    })











});