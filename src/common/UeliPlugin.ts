import type { OperatingSystem } from "./OperatingSystem";

export interface UeliPlugin {
    readonly id: string;
    readonly name: string;
    readonly nameTranslationKey?: string;
    readonly supportedOperatingSystems: OperatingSystem[];
    addSearchResultItemsToSearchIndex(): Promise<void>;
}
