"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
var WinsAnalyser = /** @class */ (function () {
    function WinsAnalyser(team) {
        this.team = team;
    }
    WinsAnalyser.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if ((match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) || (match[2] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin)) {
                wins++;
            }
        }
        return this.team + " won " + wins + " games";
    };
    return WinsAnalyser;
}());
exports.WinsAnalyser = WinsAnalyser;
