import viewerStyle from '../styles/viewer.module.css'
import Script from 'next/script'
import { useEffect } from 'react'

export default function Viewer() {

    useEffect(() => {

        var viewer;
        var token;

        const getViewerAccessToken = async () => {
          try {
            const resp = await fetch('/api/auth/token');
            if (!resp.ok) {
              throw new Error(await resp.text());
            }
            
            token = await resp.json();

            var options = {
              env: 'AutodeskProduction2',
              api: 'streamingV2',
              accessToken: token.access_token
            };
        
            Autodesk.Viewing.Initializer(options, function () {
        
              var htmlDiv = document.getElementById('apsViewer');
              viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
              var startedCode = viewer.start();
              if (startedCode > 0) {
                console.error('Failed to create a Viewer: WebGL not supported.');
                return;
              }
        
              console.log('Initialization complete, loading a model next...');
    
              var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6dGVzdF9idWNrZXRfMjAxOTA3MTcvcmFjX2FkdmFuY2VkX3NhbXBsZV9wcm9qZWN0LnJ2dA';
    
              console.log(documentId);
    
              Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
            });
        
            function onDocumentLoadSuccess(viewerDocument) {
              var defaultModel = viewerDocument.getRoot().getDefaultGeometry();
              viewer.loadDocumentNode(viewerDocument, defaultModel);
            };
        
            function onDocumentLoadFailure() {
              console.error('Failed fetching Forge manifest');
            };

          } catch (err) {
            alert('Could not obtain access token. See the console for more details.');
            console.error(err);
          }
        }
        
        getViewerAccessToken();
      }, [])
 
    return (
        <>
            <div id="apsViewer"></div>
        </>
    )
}

