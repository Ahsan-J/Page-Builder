const theme = {
    backgroundColor: {
        primary: "#2196f3",
        secondary: "#ffffff",
        success: "#4caf50",
        info: "#9c27b0",
        warning: "#ff9800",
        danger: "#e51c23",
        light: "#f8f9fa",
        dark: "#222222",
        link: "#2196f3",
    },
    get borderColor() {
        return this.backgroundColor;
    },
    get outlineColor() {
        return this.backgroundColor;
    },
    get textColor() {
        return this.backgroundColor;
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    }
}
export default theme;