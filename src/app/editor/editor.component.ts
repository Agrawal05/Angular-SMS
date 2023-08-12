import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds'
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-dart';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-ambiance';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/ext-language_tools';


import Editor =ace.Editor 
const EditSession=ace.EditSession

let THEME = 'ace/theme/github';
let LANG = 'ace/mode/python';
const INIT_CONTENT = '';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit {
  private editor:any;
  @Input() content: string | any;
  @ViewChild('codeEditor') codeEditorElmRef: ElementRef | any;
  private codeEditor: ace.Ace.Editor | any;

  constructor(private elementRef:ElementRef){}
  ngAfterViewInit(): void {
    const element = this.codeEditorElmRef.nativeElement;
    // this.editor=ace.edit('editor'); 
    this.editor.session.setMode('ace/mode/python');
    // this.getEditorOptions();
    const editorOptions = this.getEditorOptions();
    this.codeEditor = this.createCodeEditor(element, editorOptions);
    this.setContent(this.content || INIT_CONTENT)
  }
  setContent(content: string): void {
    if (this.codeEditor) {
      this.codeEditor.setValue(content);
    }
  }
  createCodeEditor(element: Element, options: any): ace.Ace.Editor {
    
    const editor = ace.edit(element, options);//instance of ace
    editor.setTheme(THEME); //color change giving yello colour to active line
    editor.getSession().setMode(LANG);
    editor.setShowFoldWidgets(true);
    return editor;
  }

  ngAfterContentInit(): void {
    this.editor=ace.edit('editor'); 
    this.editor.session.setMode('ace/mode/python');
    this.getEditorOptions();

  }
  getEditorOptions(): Partial<ace.Ace.EditorOptions> & {
    enableBasicAutocompletion?: boolean;
  } 
  {
    const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
      highlightActiveLine: true,
      minLines: 25,
      maxLines: Infinity,
      fontSize: 16,
      autoScrollEditorIntoView: true,
      useSoftTabs: false
      
    };
    const extraEditorOptions = { enableBasicAutocompletion: true };
    return Object.assign(basicEditorOptions, extraEditorOptions);
  }

}
