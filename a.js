$(document).ready(function() {
  $('#registerForm').submit(function(e) {
    e.preventDefault(); // prevent the form from submitting
    
    var name = $('#name').val();
    var joinDate = new Date($('#joinDate').val());
    var email = $('#email').val();
    var telephone = $('#telephone').val();
    
    // Validate name: first letter must be uppercase
    if (!/^[A-Z][a-z]*$/.test(name)) {
      alert('Tên phải nhập chữ hoa đầu tiên');
      return false;
    }
    
    // Validate join date: must be at least 3 days from today
    var today = new Date();
    var minDate = new Date(today.setDate(today.getDate() + 3));
    if (joinDate < minDate) {
      alert('Ngày tham gia phải sau ngày hiện hành 3 ngày');
      return false;
    }
    
    // Validate email: cannot be empty and must be valid format
    if (email === '' || !/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email)) {
      alert('Email không được trống và phải đúng định dạng.');
      return false;
    }
    
    // Validate telephone: must be in the format 0000-000-000
    if (!/^\d{4}\d{3}\d{3}$/.test(telephone)) {
      alert('Telephone number phải đúng định dạng số 0000-000-000');
      return false;
    }
    
    // If all validations pass, submit the form
    alert('Đăng ký thành công!');
    this.submit();
  });
});

  