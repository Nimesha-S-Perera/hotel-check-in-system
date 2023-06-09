<?php

namespace App\Http\Controllers;

use App\Http\Resources\InvoiceDetailResource;
use App\Models\InvoiceDetail;
use App\Http\Requests\StoreInvoiceDetailsRequest;
use App\Http\Requests\UpdateInvoiceDetailsRequest;

class InvoiceDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(InvoiceDetail $invoiceDetail)
    {
        $invoiceDetails = $invoiceDetail::all();
        return InvoiceDetailResource::collection($invoiceDetails);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInvoiceDetailsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(InvoiceDetail $invoiceDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InvoiceDetail $invoiceDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInvoiceDetailsRequest $request, InvoiceDetail $invoiceDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InvoiceDetail $invoiceDetails, int $id)
    {
        $invoiceDetails::destroy($id);
    }
}
