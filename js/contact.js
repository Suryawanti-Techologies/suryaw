if (window.location.search == '?success=true') {
    console.log('success');
    $('.alert').show();
} else {
    console.log('test');
    $('.alert').hide();
}