const toasts = document.querySelector('.toasts')

function toast({
    title = '',
    msg = '',
    type = 'none',
    duration = 0
}) {
    
    const toast = document.createElement('div')
    const delay = (duration/1000).toFixed(2)

    const icons = {
        success: 'fas fa-check-circle',
        warning: 'fas fa-exclamation-circle',
        danger: 'fas fa-exclamation-circle'
    }

    toast.style.animation = `slideInRight .5s linear, fadeOut 1s linear ${delay}s forwards`
    
    toast.classList.add('toast', `toast--${type}`)
    
    toast.innerHTML = `<div class="toast__icon">
             <i class="${icons[type]}"></i>
        </div>

        <div class="toast__body">
            <p class="toast__title">${title}</p>
            <span class="toast__msg">${msg}</span>
        </div>

        <div class="toast__close">
            <i class="toast__close-icon fas fa-times"></i>
    </div>`

    toasts.appendChild(toast)

     // Auto remove toast
     const autoRemoveToast = setTimeout(function() {
        toasts.removeChild(toast)
    },duration + 1000) 

    // Remove toast when clicked
    toast.onclick = (e) => {
        if(e.target.closest('.toast__close')){
            toasts.removeChild(toast)
            clearTimeout(autoRemoveToast)
        }
    }
}

function showSuccessToast() {
    toast({
        title: 'Thành công',
        msg: 'Đăng nhập thành công, mời bạn tiếp tục thao tác.',
        type: 'success',
        duration: 3000
    })
}

function showWarningToast() {
    toast({
        title: 'Cảnh báo',
        msg: 'Vui lòng chủ động bảo mật thông tin.',
        type: 'warning',
        duration: 3000
    })
}

function showDangerToast() {
    toast({
        title: 'Thất bại',
        msg: 'Đăng nhập không thành công, vui lòng thử lại/',
        type: 'danger',
        duration: 3000
    })
}
