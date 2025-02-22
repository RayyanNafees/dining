import { defineConfig, type Preset } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetExt from "@twind/preset-ext";

export default {
  ...defineConfig({
    presets: [
      presetTailwind() as Preset,
      presetAutoprefix() as Preset,
      presetExt() as Preset,
    ],
    rules: [
      [
        /^size-(\d+)$/,
        (match: string[]) => ({
          height: `${+match[1] / 4}rem`,
          width: `${+match[1] / 4}rem`,
        }),
      ]
    ],
  }),
  selfURL: import.meta.url,
};
