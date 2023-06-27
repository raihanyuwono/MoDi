function getStatus(status) {
  switch (parseInt(String(status)[0])) {
    case 2:
      return 'success';
    case 4:
      return 'warning';
    case 5:
      return 'error';
    default:
      return 'info';
  }
}

function Toast(toast, { title, status }) {
  return toast({
    title: title,
    status: getStatus(status),
    duration: 5000,
    isClosable: true,
    position: 'top',
  });
}

export default Toast;
