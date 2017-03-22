"use strict";
var attachments = {
    top: { attachment: 'bottom center', offset: '10px 0', opposite: 'bottom' },
    left: { attachment: 'middle right', offset: '0 15px', opposite: 'right' },
    right: { attachment: 'middle left', offset: '0 -15px', opposite: 'left' },
    bottom: { attachment: 'top center', offset: '-10px 0', opposite: 'top' },
};
var PLACEMENTS = Object.keys(attachments).reduce(function (placements, direction) {
    var _a = attachments[direction], attachment = _a.attachment, offset = _a.offset, opposite = _a.opposite;
    var targetAttachment = attachments[opposite].attachment;
    placements[direction] = { opposite: opposite, attachment: attachment, targetAttachment: targetAttachment, offset: offset };
    return placements;
}, {});
function placement(direction) {
    return PLACEMENTS[direction];
}
exports.placement = placement;
