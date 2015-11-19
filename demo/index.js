import ModuleEntryPoint from '../src';
import {inspect} from 'util';

var container = document.createElement('pre');
container.textContent = inspect(ModuleEntryPoint);
document.body.appendChild(container);
