/**
 * CoreData should contain any data used across multiple nested app components
 * @param {Array<string>} currentStackPath - An array containing the nodes with the id of the current stack path.
 */
export default interface CoreData {
    currentStackPath: Array<string>;
}

export const initialCoreData = {
    currentStackPath: ['hEowVJjYagxvhWPNw9HbU5'],
};
