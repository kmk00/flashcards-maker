import { usePDFOptions } from "@/store/options";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import DisplayOptions from "./DisplayOptions";

const PDFOptionsComponent = () => {
  const { hideOptions, currentOptions, setNewOptions } = usePDFOptions();

  const [settings, setSettings] = useState<PDFOptions>(currentOptions);

  const handleSettingsChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSettings({
      ...settings,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const saveAndExit = () => {
    setNewOptions(settings);
    hideOptions();
  };

  // TODO: Add styling to the options
  // TODO: Split code into the smaller components

  return (
    <div className="flex flex-col justify-center">
      <h2>Select options for your PDF file</h2>
      <div className="flex gap-4 mt-4">
        <div className="flex gap-4 flex-col">
          <p>Width</p>
          <button
            type="button"
            className="bg-slate-700 p-2"
            name="width"
            value={195}
            onClick={handleSettingsChange}
          >
            small
          </button>
          <button
            type="button"
            className="bg-slate-700 p-2"
            name="width"
            value={280}
            onClick={handleSettingsChange}
          >
            big
          </button>
        </div>
        <div className="flex gap-4 flex-col">
          <p>Height</p>
          <button
            type="button"
            className="bg-slate-700 p-2"
            name="height"
            value={195}
            onClick={handleSettingsChange}
          >
            small
          </button>
          <button
            type="button"
            className="bg-slate-700 p-2"
            name="height"
            value={270}
            onClick={handleSettingsChange}
          >
            big
          </button>
        </div>
        <div className="flex gap-4 flex-col">
          <p>Select Mode</p>
          <select
            value={settings.mode}
            onChange={(e) => setSettings({ ...settings, mode: e.target.value })}
            className="bg-slate-700 p-2"
          >
            <option value="single">Single Card</option>
            <option value="fold">Folded Card</option>
          </select>
          <div className="flex gap-4 items-center">
            <p>Question Size</p>
            <input
              className="text-slate-600 w-10"
              type="number"
              min={12}
              max={40}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  questionFontSize: parseInt(e.target.value),
                })
              }
              value={settings.questionFontSize}
            />
          </div>
          <div className="flex gap-4 items-center">
            <p>Answer Size</p>
            <input
              className="text-slate-600 w-10"
              type="number"
              min={12}
              max={40}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  answerFontSize: parseInt(e.target.value),
                })
              }
              value={settings.answerFontSize}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <p>Question Color</p>
          <HexColorPicker
            className=" "
            color={settings.questionColor}
            onChange={(setColor) =>
              setSettings({ ...settings, questionColor: setColor })
            }
          />
        </div>
        <div className="flex gap-4 flex-col">
          <p>Answer Color</p>
          <HexColorPicker
            className=" "
            color={settings.answerColor}
            onChange={(setColor) =>
              setSettings({ ...settings, answerColor: setColor })
            }
          />
        </div>
      </div>
      <div className="flex gap-4">
        <DisplayOptions label="New" options={settings} />
        <DisplayOptions label="Current" options={currentOptions} />
      </div>
      <div className="mt-4 flex gap-4">
        <button onClick={saveAndExit} className="bg-slate-700 p-2">
          Save and exit
        </button>
        <button onClick={hideOptions} className="bg-slate-700 p-2">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PDFOptionsComponent;
