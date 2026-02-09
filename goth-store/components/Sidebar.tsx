// components/Sidebar.tsx
'use client';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <aside
        className={`
          w-full lg:w-[20%]
          bg-gray-50 border-r border-gray-200 
          overflow-y-auto
          min-h-screen
          
          fixed lg:static 
          inset-0 
          z-90 
          transform lg:transform-none
          transition-transform duration-300 ease-in-out lg:transition-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
      
        <div className="sticky top-0 bg-gray-50 border-b border-gray-200 p-6 z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
            
    
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="p-6">
            
        </div>
      </aside>
    </>
  );
};

export default Sidebar;