'use client';

import * as React from 'react';
import {
  Calendar,
  FileText,
  Folder,
  Mail,
  Phone,
  Search,
  Settings,
  Star,
  User,
} from 'lucide-react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { cn } from '@/helpers/cn';

// Mock data for search results

export function SearchInputDemo() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  // Filter results based on search query
  const filteredResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];

    return mockData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  // Show popover only when there are results
  React.useEffect(() => {
    setIsOpen(filteredResults.length > 0);
  }, [filteredResults.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectItem = (item: (typeof mockData)[0]) => {
    console.log('Selected:', item);
    setSearchQuery('');
    setIsOpen(false);
  };

  return (
    <div className='[grid-area:cmk]'>
      <Popover modal={true} onOpenChange={setIsOpen} open={isOpen}>
        <PopoverTrigger asChild>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            <input
              className={cn(
                'flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background',
                'file:border-0 file:bg-transparent file:text-sm file:font-medium',
                'placeholder:text-muted-foreground',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50',
              )}
              onChange={handleInputChange}
              placeholder='Search anything...'
              type='text'
              value={searchQuery}
            />
          </div>
        </PopoverTrigger>

        {filteredResults.length > 0 && (
          <PopoverContent
            align='start'
            autoFocus={false}
            className=' p-0'
            onOpenAutoFocus={(e) => {
              console.log('onOpenAutoFocus', e);
              return e.preventDefault();
            }}>
            <div className='max-h-[300px] overflow-y-auto'>
              {/* Group results by category */}
              {Object.entries(
                filteredResults.reduce(
                  (acc, item) => {
                    if (!acc[item.category]) acc[item.category] = [];
                    acc[item.category].push(item);
                    return acc;
                  },
                  {} as Record<string, typeof mockData>,
                ),
              ).map(([category, items]) => (
                <div key={category}>
                  <div className='px-3 py-2 text-xs font-semibold text-muted-foreground border-b'>
                    {category}
                  </div>
                  {items.map((item) => (
                    <button
                      className={cn(
                        'flex w-full items-center gap-3 px-3 py-2 text-sm',
                        'hover:bg-accent hover:text-accent-foreground',
                        'focus:bg-accent focus:text-accent-foreground focus:outline-none',
                      )}
                      key={item.id}
                      onClick={() => handleSelectItem(item)}>
                      <item.icon className='h-4 w-4' />
                      <span className='flex-1 text-left'>{item.title}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {filteredResults.length > 0 && (
              <div className='border-t px-3 py-2 text-xs text-muted-foreground'>
                {filteredResults.length} result
                {filteredResults.length !== 1 ? 's' : ''} found
              </div>
            )}
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
}

const mockData = [
  { category: 'Apps', icon: Calendar, id: 1, title: 'Calendar Events' },
  { category: 'Settings', icon: User, id: 2, title: 'User Profile' },
  { category: 'Settings', icon: Settings, id: 3, title: 'System Settings' },
  { category: 'Files', icon: FileText, id: 4, title: 'Documents' },
  { category: 'Files', icon: Folder, id: 5, title: 'Projects Folder' },
  { category: 'Apps', icon: Mail, id: 6, title: 'Email Client' },
  { category: 'Contacts', icon: Phone, id: 7, title: 'Phone Contacts' },
  { category: 'Bookmarks', icon: Star, id: 8, title: 'Favorites' },
  { category: 'Files', icon: FileText, id: 9, title: 'Meeting Notes' },
  { category: 'Apps', icon: Calendar, id: 10, title: 'Team Calendar' },
];
