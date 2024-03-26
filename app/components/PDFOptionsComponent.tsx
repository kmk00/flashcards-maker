import { usePDFOptions } from "@/store/options";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

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
            value={200}
            onClick={handleSettingsChange}
          >
            200
          </button>
          <button
            type="button"
            className="bg-slate-700 p-2"
            name="width"
            value={250}
            onClick={handleSettingsChange}
          >
            250
          </button>
          <button
            type="button"
            className="bg-slate-700 p-2"
            name="width"
            value={300}
            onClick={handleSettingsChange}
          >
            300
          </button>
        </div>
        <div className="flex gap-4 flex-col">
          <p>Height</p>
          <button
            type="button"
            className="bg-slate-700 p-2"
            name="height"
            value={200}
            onClick={handleSettingsChange}
          >
            200
          </button>
          <button
            type="button"
            className="bg-slate-700 p-2"
            name="height"
            value={250}
            onClick={handleSettingsChange}
          >
            250
          </button>
          <button
            type="button"
            className="bg-slate-700 p-2"
            name="height"
            value={300}
            onClick={handleSettingsChange}
          >
            300
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
            <option value="reverse">Reverse Card</option>
          </select>
        </div>
        <div className="flex gap-4 flex-col">
          <p>Text Color</p>
          <HexColorPicker
            className=" "
            color={settings.textColor}
            onChange={(setColor) =>
              setSettings({ ...settings, textColor: setColor })
            }
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="mt-4 flex gap-4 flex-col">
          <p>Changed Card Options:</p>
          <div>
            <p>
              {settings.width} x {settings.height}
            </p>
            <p>{settings.mode}</p>
            <p style={{ color: settings.textColor }} className="p-2 bg-white">
              New text color
            </p>
          </div>
        </div>
        <div className="mt-4 flex gap-4 flex-col">
          <p>Current Card Options:</p>
          <div>
            <p>
              {currentOptions.width} x {currentOptions.height}
            </p>
            <p>{currentOptions.mode}</p>
            <p
              style={{ color: currentOptions.textColor }}
              className="p-2 bg-white"
            >
              Current text color
            </p>
          </div>
        </div>
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
