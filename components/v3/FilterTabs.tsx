"use client";


type Tab = {
  id: string;
  label: string;
};

type FilterTabsProps = {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
};

export function FilterTabs({
  tabs,
  activeTab,
  onChange,
  className = "",
}: FilterTabsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => onChange(tab.id)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
            activeTab === tab.id
              ? "bg-brand text-white shadow-md"
              : "bg-mist text-ink hover:bg-steel"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
