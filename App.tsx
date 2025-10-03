
import React from 'react';

import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Label } from './components/ui/Label';
import { Textarea } from './components/ui/Textarea';
import { Select } from './components/ui/Select';
import { ComponentShowcase } from './components/docs/ComponentShowcase';
import { 
  buttonPropsData, 
  inputPropsData, 
  labelPropsData,
  textareaPropsData,
  selectPropsData
} from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              FormKit
            </span> UI
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400">
            A beautifully designed, reusable, and developer-friendly React form component library built with TypeScript and Tailwind CSS.
          </p>
        </header>

        <div className="space-y-16">
          <ComponentShowcase
            title="Button"
            description="A versatile button component with multiple variants, sizes, and states."
            propsData={buttonPropsData}
            code={`
import { Button } from './components/ui/Button';

<Button variant="primary" size="lg">
  Primary Button
</Button>
            `}
          >
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="default">Default</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-4">
               <Button variant="primary" disabled>Disabled</Button>
            </div>
          </ComponentShowcase>
          
          <ComponentShowcase
            title="Input"
            description="A standard text input field with consistent styling and states."
            propsData={inputPropsData}
            code={`
import { Input } from './components/ui/Input';
import { Label } from './components/ui/Label';

<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>
            `}
          >
            <div className="w-full max-w-sm space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" />
                </div>
                 <div>
                  <Label htmlFor="email-disabled">Email (Disabled)</Label>
                  <Input id="email-disabled" type="email" placeholder="you@example.com" disabled />
                </div>
            </div>
          </ComponentShowcase>

          <ComponentShowcase
            title="Textarea"
            description="A multi-line text input field for longer content."
            propsData={textareaPropsData}
            code={`
import { Textarea } from './components/ui/Textarea';
import { Label } from './components/ui/Label';

<div>
  <Label htmlFor="bio">Biography</Label>
  <Textarea id="bio" placeholder="Tell us about yourself..." />
</div>
            `}
          >
            <div className="w-full max-w-sm space-y-4">
              <div>
                <Label htmlFor="comment">Your Comment</Label>
                <Textarea id="comment" placeholder="Type your comment here." />
              </div>
              <div>
                <Label htmlFor="comment-disabled">Comment (Disabled)</Label>
                <Textarea id="comment-disabled" placeholder="Cannot type here." disabled/>
              </div>
            </div>
          </ComponentShowcase>

           <ComponentShowcase
            title="Select"
            description="A dropdown selection component for choosing from a list of options."
            propsData={selectPropsData}
            code={`
import { Select } from './components/ui/Select';
import { Label } from './components/ui/Label';

<div>
  <Label htmlFor="framework">Favorite Framework</Label>
  <Select id="framework">
    <option value="react">React</option>
    <option value="vue">Vue</option>
    <option value="svelte">Svelte</option>
  </Select>
</div>
            `}
          >
            <div className="w-full max-w-sm space-y-4">
               <div>
                  <Label htmlFor="food">Favorite Food</Label>
                  <Select id="food">
                    <option>Pizza</option>
                    <option>Tacos</option>
                    <option>Sushi</option>
                  </Select>
               </div>
               <div>
                  <Label htmlFor="food-disabled">Favorite Food (Disabled)</Label>
                  <Select id="food-disabled" disabled>
                    <option>Pizza</option>
                  </Select>
               </div>
            </div>
          </ComponentShowcase>

          <ComponentShowcase
            title="Label"
            description="A simple label component to be used with form elements for accessibility."
            propsData={labelPropsData}
            code={`
import { Label } from './components/ui/Label';

<Label htmlFor="username">Username</Label>
            `}
          >
            <div className="w-full max-w-sm">
                <Label>This is a standard label.</Label>
            </div>
          </ComponentShowcase>

        </div>
        <footer className="text-center mt-20 pt-8 border-t border-slate-700">
            <p className="text-slate-500">Built for demonstration. Inspired by modern UI libraries.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
