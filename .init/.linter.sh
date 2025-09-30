#!/bin/bash
cd /home/kavia/workspace/code-generation/marketing-service-showcase-169663-170155/marketing_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

