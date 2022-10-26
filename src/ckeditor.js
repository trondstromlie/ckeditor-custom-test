/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import pdf from '../icons/pdf.svg'


class Timestamp extends Plugin {
	init() {
		console.log( 'AddPdf was initialized. v2' );
		const editor = this.editor;

		editor.ui.componentFactory.add( 'addpdf', () => {
			const button = new ButtonView();
			button.set( {
				label: 'Add PDF',
				withText: true,
				icon: pdf
			});

			button.on('execute', () => {
				const now = new Date();
				editor.model.change( writer => {
					const htmlDP = editor.data.processor;
					const viewFragment = htmlDP.toView("<div><b>Test</b> Content</div>");
					const modelFragment = editor.data.toModel( viewFragment );

					editor.model.insertContent(modelFragment);
				})
			})

			return button;
		})
	}
}

export default class ClassicEditor extends ClassicEditorBase {}


// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Autoformat,
	BlockQuote,
	Bold,
	CKFinderUploadAdapter,
	CloudServices,
	CodeBlock,
	Essentials,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	List,
	Markdown,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	SourceEditing,
	Table,
	TableToolbar,
	TextTransformation,
	Timestamp,
	GeneralHtmlSupport
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'codeBlock',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'|',
			'undo',
			'redo',
			'|',
			'sourceEditing',
			'addpdf'
		]
	},
	language: 'nb',
	image: {
		toolbar: [
			'imageTextAlternative',
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	htmlSupport: {
		allow: [
			{
				name: 'div'
			}
		]
	}
};
