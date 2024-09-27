  // Define button colors (optional, for more flexibility)
  const bgColorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    danger: 'bg-danger',
  };
  const hoverBgColorClasses = {
    primary: 'hover:bg-primary-400 ',
    secondary: 'hover:bg-secondary-400',
    danger: 'hover:bg-danger-400',
  };

  //border radius
  const borderRadius = {
    none:'rounded-none',
    sm:'rounded-sm',
    default:'rounded',
    md:'rounded-md',
    lg:'rounded-lg',
    xl:'rounded-xl',
    xxl:'rounded-2xl',
    xxxl: 'rounded-3xl',
    full:'rounded-3xl',
    's-none':'rounded-s-none'
  }
  //border radius
  const shadows = {
    sm:'shadow-sm',
    default:'shadow',
    md:'shadow-md',
    lg:'shadow-lg',
    xl:'shadow-xl',
    xxl:'shadow-xxl',
    inner:'shadow-inner',
    none:'shadow-none'
  }


  export default{
    bgColorClasses,
    borderRadius,
    shadows,
    hoverBgColorClasses
  }