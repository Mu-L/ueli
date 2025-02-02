import { type SearchResultItemAction, createOpenFileAction } from "@common/Core";
import { describe, expect, it } from "vitest";

describe(createOpenFileAction, () => {
    it("should create an 'open file' action", () => {
        const actual = createOpenFileAction({
            description: "test description",
            filePath: "test file path",
            descriptionTranslation: {
                key: "test translation key",
                namespace: "test namespace",
            },
            keyboardShortcut: "test keyboard shortcut",
        });

        const expected = <SearchResultItemAction>{
            argument: "test file path",
            description: "test description",
            descriptionTranslation: {
                key: "test translation key",
                namespace: "test namespace",
            },
            handlerId: "OpenFilePath",
            fluentIcon: "OpenRegular",
            hideWindowAfterInvocation: true,
            keyboardShortcut: "test keyboard shortcut",
        };

        expect(actual).toEqual(expected);
    });
});
