"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LNode = /** @class */ (function () {
    function LNode(val) {
        this.next = null;
        this.val = val;
    }
    return LNode;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (val) {
        var node = new LNode(val);
        if (!this.head) {
            this.head = node;
        }
        else {
            var tail = this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        }
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return -0;
            var node = this.head;
            var length = 1;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.remove = function (val) {
        if (!this.head)
            return;
        var node = this.head;
        while (node) { }
    };
    LinkedList.prototype.at = function (index) {
        if (!this.head)
            throw new Error('Index out of bounds');
        var node = this.head;
        var counter = 0;
        while (node) {
            if (counter == index)
                return node;
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.swap = function (lIndex, rIndex) {
        var lNode = this.at(lIndex);
        var rNode = this.at(rIndex);
        var temp = lNode.val;
        lNode.val = rNode.val;
        rNode.val = temp;
    };
    LinkedList.prototype.compare = function (lIndex, rIndex) {
        return this.at(lIndex).val > this.at(rIndex).val;
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            return;
        var node = this.head;
        while (node) {
            console.log(node.val);
            node = node.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
