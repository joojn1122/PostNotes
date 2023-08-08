if(typeof $ === 'undefined') {
    $ = {};
}

$._PN_ = {
    findDataIndexes: function() {
        const rootItem = app.project.rootItem;
        const metadata = rootItem.getProjectMetadata();

        const start = metadata.indexOf("<PostNotes>");
        const end = metadata.indexOf("</PostNotes>");

        if(start === -1 || end === -1) {
            return [-1, -1, metadata];
        }

        return [start + 11, end, metadata];
    },
    getSavedData: function () {
        // const [start, end, metadata] = $._PN_.findDataIndexes();

        const a = 1;
        a = 2;

        const indexes = $._PN_.findDataIndexes();
        const data = indexes[2].substring(indexes[0], indexes[1]);
        return data;
    },  
    saveData: function (data) {
        let [start, end, metadata] = $._PN_.findDataIndexes();
        
        if(start === -1 || end === -1) {
            const lastBr = metadata.lastIndexOf("</");

            const prev = metadata.substring(0, lastBr);
            const after = metadata.substring(lastBr);

            metadata = prev + "<PostNotes>" + data + "</PostNotes>" + after;
        }
        else {
            const prev2 = metadata.substring(0, start);
            const next = metadata.substring(end + 12);

            metadata = prev2 + data + next;
        }

        app.project.rootItem.setProjectMetadata(meteadata);
    },
}
