export const SHOWMENU = 'SHOWMENU';
export const MAINYUK = 'MAINYUK';
export const MOVEMENU = 'MOVEMENU';
export const CONNECTIONERROR = 'CONNECTIONERROR';

export const showMenu = () => ({
    type: SHOWMENU
});

export const mainYuk = () => ({
    type: MAINYUK
});

export const moveMenu = menuName => ({
    type: MOVEMENU,
    menuName
});

export const connectionError = () => ({
    type: CONNECTIONERROR
});
