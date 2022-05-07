'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;


var courseSchema = Schema( {
   id: Number,
   title: String,
   year: String,
   runtime: String,
   genres: [String],
   director: String,
   actors: String,
   plot: String,
   posterUrl: String,

} );

module.exports = mongoose.model( 'Course', courseSchema );
