/**
 * AppData should contain anything related to the application infrastructure.
 * The AppData interface is uncoupled from AppData.tsx because it may be used for many components.
 * @param {boolean} isMobile whether or not the window screen size is xs (<= 600px)
 */
export default interface AppData {
    isMobile: boolean;
}

export const initialAppData = {
    isMobile: false,
};
