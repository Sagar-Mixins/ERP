interface ToggleSwitchProps {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
}

export default function ToggleSwitch({ enabled, setEnabled, }: ToggleSwitchProps) {

  return (
    <label className="inline-flex items-center cursor-pointer select-none">

      <input type="checkbox" checked={enabled} onChange={() => setEnabled(!enabled)} className="sr-only" />

      <div className={`w-14 h-8 rounded-full transition-colors duration-300 ease-in-out ${enabled ? 'bg-blue-600' : 'bg-gray-300'}`}>
        <div className={`w-6 h-6 bg-white rounded-full mt-1 ml-1 transition-transform duration-300 ease-in-out transform ${enabled ? 'translate-x-6' : 'translate-x-0'}`} />
      </div>

    </label>
  );
}