type Tab = {
  name: string;
  isActive: boolean;
};

interface TabsProps {
  tabs: Tab[];
  onClickTab: (tabIndex: number) => void;
}

export default function Tabs({ tabs, onClickTab }: TabsProps) {

  return (
    <div className="mt-6 gap-2 md:space-y-2 rounded-3xl p-3 flex md:block">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onClickTab(index)}
          className={`flex w-full items-center justify-between rounded-3xl px-4 py-3 text-left text-sm font-semibold max-w-20 md:max-w-full ${
            tab.isActive
              ? 'bg-slate-950 text-white'
              : 'bg-transparent text-slate-700 hover:bg-slate-200 hover:text-slate-900'
          }`}
        >
          <span>{tab.name}</span>
        </button>
      ))}
    </div>
  );
}